<template>
    <div class="list-item">
        <div ref="threeRef" class="sceneItem"></div>
        <!-- 监测 -->
        <div ref="statsDivRef"></div>
    </div>
</template>
<!-- 基本场景 -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
    AxesHelper,
    BoxGeometry,
    Color,
    Mesh,
    MeshLambertMaterial,
    PerspectiveCamera,
    PlaneGeometry,
    Scene,
    SpotLight,
    WebGLRenderer,
    Frustum,
    AmbientLight,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'stats.js';
const threeRef = ref<HTMLDivElement>();
const statsDivRef = ref<HTMLDivElement>();
const statsRef = ref<Stats>();
const frustum = new Frustum();
function initStats() {
    statsRef.value = new Stats();
    statsRef.value.showPanel(0); // 默认显示0: fps, 1: ms, 2: mb, 3+: custom
    statsDivRef.value?.appendChild(statsRef.value.dom);
}

function init() {
    // 性能监测
    initStats();

    // 场景
    const scene = new Scene();

    // 添加坐标
    const axes = new AxesHelper(20);
    scene.add(axes);

    // 平面
    const planeGeometry = new PlaneGeometry(40, 40);
    const planeMaterial = new MeshLambertMaterial({ color: 0xcccccc });
    const plane = new Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    // 接收阴影
    plane.receiveShadow = true;
    scene.add(plane);

    // 立方体
    const cubeGeometry = new BoxGeometry(4, 4, 4);
    const cubeMaterial = new MeshLambertMaterial({ color: 0xff0000 });
    const cube = new Mesh(cubeGeometry, cubeMaterial);
    // 是否投射阴影
    cube.castShadow = true;
    cube.position.set(0, 4, 0);
    scene.add(cube);

    // 灯光
    const spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-10, 40, -20);
    spotLight.castShadow = true;
    // 全局灯光
    const ambientLight = new AmbientLight(0xffffff, 0.4); // color, intensity
    scene.add(ambientLight);
    // 阴影映射分辨率
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;
    // 阴影模糊程度
    spotLight.shadow.radius = 2;
    scene.add(spotLight);
    // 透视相机
    const camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(-15, 30, 20);
    // 让相机面向场景中设置的位置
    camera.lookAt(scene.position);

    // 渲染器
    const renderer = new WebGLRenderer();
    // 场景背景色
    renderer.setClearColor(new Color(0xf6f6f6));
    // 渲染器的宽度和高度
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 启用阴影映射
    renderer.shadowMap.enabled = true;

    // 渲染器的输出添加到threeRef,?检查threeRef.value是否存在，如果存在则调用 appendChild(),否则不执行任何操作
    threeRef.value?.appendChild(renderer.domElement);
    // 鼠标控制对象
    const controls = new OrbitControls(camera, renderer.domElement);
    // 动画
    requestAnimationFrame(renderScene);
    function renderScene() {
        statsRef.value?.begin(); // 开始统计
        // 更新相机的 frustum
        frustum.setFromProjectionMatrix(
            new PerspectiveCamera().projectionMatrix.multiply(camera.matrixWorldInverse)
        );
        // 遍历场景中的所有对象
        scene.traverse((e) => {
            // 从 Mesh 实例出来且不是平面
            if (e instanceof Mesh && e != plane) {
                // 判断对象是否在相机的视野内
                if (frustum.intersectsObject(e)) {
                    // 在视野内，进行渲染和更新操作
                    // e.position.y += 0.1;

                }
            }
        });
        // 更新鼠标控制对象
        controls.update();
        // setTimeout(() => {
        // 渲染场景
        renderer.render(scene, camera);
        statsRef.value?.end(); // 结束统计
        // 安排下一次渲染帧
        requestAnimationFrame(renderScene);
        // },1000/170)// 限制170帧
    }
}
onMounted(() => {
    init();
});
</script>
<style>
.list-item {
    position: absolute;
    width: 100px;
    height: 100px;
    margin: auto;
}
</style>