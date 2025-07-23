"use client"

import { useEffect, useRef } from "react"

interface Point3D {
  x: number
  y: number
  z: number
}

interface Cube {
  points: Point3D[]
  rotation: {
    x: number
    y: number
    z: number
  }
  rotationSpeed: {
    x: number
    y: number
    z: number
  }
  position: {
    x: number
    y: number
    z: number
  }
  velocity: {
    x: number
    y: number
    z: number
  }
  size: number
  color: string
}

export default function CubeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスをウィンドウサイズに合わせる
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // 立方体の数
    const cubeCount = Math.min(Math.floor(window.innerWidth / 300), 8)

    // 立方体の初期化
    const cubes: Cube[] = []

    for (let i = 0; i < cubeCount; i++) {
      // 立方体の頂点を定義
      const size = 30 + Math.random() * 50
      const points: Point3D[] = [
        { x: -size, y: -size, z: -size }, // 0: 左下前
        { x: size, y: -size, z: -size }, // 1: 右下前
        { x: size, y: size, z: -size }, // 2: 右上前
        { x: -size, y: size, z: -size }, // 3: 左上前
        { x: -size, y: -size, z: size }, // 4: 左下奥
        { x: size, y: -size, z: size }, // 5: 右下奥
        { x: size, y: size, z: size }, // 6: 右上奥
        { x: -size, y: size, z: size }, // 7: 左上奥
      ]

      // 立方体の初期位置と回転速度をランダムに設定
      cubes.push({
        points,
        rotation: {
          x: Math.random() * Math.PI * 2,
          y: Math.random() * Math.PI * 2,
          z: Math.random() * Math.PI * 2,
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
        },
        position: {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: 0,
        },
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
          z: 0,
        },
        size,
        color: `rgba(0, ${100 + Math.floor(Math.random() * 100)}, ${200 + Math.floor(Math.random() * 55)}, ${0.5 + Math.random() * 0.5})`,
      })
    }

    // 3D点を2Dキャンバスに投影する関数
    const project = (point: Point3D, cube: Cube): { x: number; y: number } => {
      // 立方体の中心を原点として回転
      const rotatedX =
        point.x * Math.cos(cube.rotation.y) * Math.cos(cube.rotation.z) +
        point.y *
          (Math.cos(cube.rotation.x) * Math.sin(cube.rotation.z) +
            Math.sin(cube.rotation.x) * Math.sin(cube.rotation.y) * Math.cos(cube.rotation.z)) +
        point.z *
          (Math.sin(cube.rotation.x) * Math.sin(cube.rotation.z) -
            Math.cos(cube.rotation.x) * Math.sin(cube.rotation.y) * Math.cos(cube.rotation.z))

      const rotatedY =
        point.x * (-Math.cos(cube.rotation.y) * Math.sin(cube.rotation.z)) +
        point.y *
          (Math.cos(cube.rotation.x) * Math.cos(cube.rotation.z) -
            Math.sin(cube.rotation.x) * Math.sin(cube.rotation.y) * Math.sin(cube.rotation.z)) +
        point.z *
          (Math.sin(cube.rotation.x) * Math.cos(cube.rotation.z) +
            Math.cos(cube.rotation.x) * Math.sin(cube.rotation.y) * Math.sin(cube.rotation.z))

      const rotatedZ =
        point.x * Math.sin(cube.rotation.y) +
        point.y * (-Math.sin(cube.rotation.x) * Math.cos(cube.rotation.y)) +
        point.z * (Math.cos(cube.rotation.x) * Math.cos(cube.rotation.y))

      // 簡易的な遠近法（Z座標が大きいほど小さく見える）
      const scale = 400 / (400 + rotatedZ)

      return {
        x: cube.position.x + rotatedX * scale,
        y: cube.position.y + rotatedY * scale,
      }
    }

    // 立方体の辺を定義（頂点のインデックスペア）
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0], // 前面
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4], // 背面
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7], // 接続辺
    ]

    // アニメーションループ
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 各立方体を描画
      cubes.forEach((cube) => {
        // 回転を更新
        cube.rotation.x += cube.rotationSpeed.x
        cube.rotation.y += cube.rotationSpeed.y
        cube.rotation.z += cube.rotationSpeed.z

        // 位置を更新
        cube.position.x += cube.velocity.x
        cube.position.y += cube.velocity.y

        // 画面の端に達したら反対側から再登場
        if (cube.position.x < -cube.size * 2) cube.position.x = canvas.width + cube.size * 2
        if (cube.position.x > canvas.width + cube.size * 2) cube.position.x = -cube.size * 2
        if (cube.position.y < -cube.size * 2) cube.position.y = canvas.height + cube.size * 2
        if (cube.position.y > canvas.height + cube.size * 2) cube.position.y = -cube.size * 2

        // 立��体の頂点を2Dに投影
        const projectedPoints = cube.points.map((point) => project(point, cube))

        // 辺を描画
        ctx.strokeStyle = cube.color
        ctx.lineWidth = 1.5

        edges.forEach(([i, j]) => {
          ctx.beginPath()
          ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y)
          ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y)
          ctx.stroke()
        })

        // 頂点を描画
        ctx.fillStyle = cube.color
        projectedPoints.forEach((point) => {
          ctx.beginPath()
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2)
          ctx.fill()
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" />
}
