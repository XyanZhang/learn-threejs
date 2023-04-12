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