import './style.css';
// 全局引入
import * as THREE from 'three';
const scene = new THREE.Scene();

// 按需引入
// import { Scene } from 'three';
// const scene = new Scene();

// 定义渲染尺寸
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// 初始化渲染器
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 初始化相机
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

// 初始化网格
// 立方体 
// BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 基础网格材质 MeshBasicMaterial(parameters: Object)
const material = new THREE.MeshBasicMaterial({ color: 0x03c03c });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 页面缩放事件监听
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // 更新渲染
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  // 更新相机
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
});

// 动画
const tick = () => {
  // 更新渲染器
  renderer.render(scene, camera);
  // 给网格模型添加一个转动动画
  mesh && (mesh.rotation.y += .02);
  mesh && (mesh.rotation.x += .02);
  // 页面重绘时调用自身
  window.requestAnimationFrame(tick);
}
tick();