import React, { useRef, useEffect, useState } from "react";

import { generateItem, Item } from "./utils";

const radius = [1, 120];
const speed = 10;
const blurSpeed = 1;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    canvas.width = windowWidth + radius[1] * 2;
    canvas.height = windowHeight + radius[1] * 2;
    context.globalCompositeOperation = "lighter";

    const items: Item[] = [];
    let count = 50;
    while (count--) {
      items.push(generateItem(canvas.width, canvas.height));
    }

    const pi2 = Math.PI * 2;

    const changeCanvas = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      items.forEach((item) => {
        if (
          (item.blur + item.initialBlurDirection * blurSpeed >= radius[1] &&
            item.initialBlurDirection !== 0) ||
          (item.blur + item.initialBlurDirection * blurSpeed <= radius[0] &&
            item.initialBlurDirection !== 0)
        ) {
          item.initialBlurDirection *= -1;
        }

        item.x =
          (item.x + item.initialXDirection * speed + canvas.width) %
          canvas.width;
        item.y =
          (item.y + item.initialYDirection * speed + canvas.height) %
          canvas.height;
        item.blur += item.initialBlurDirection * blurSpeed;

        context.filter = `blur(${item.blur}px)`;
        context.fillStyle = item.color;

        context.beginPath();
        context.arc(item.x, item.y, item.radius, 0, pi2);
        context.fill();
      });

      window.requestAnimationFrame(changeCanvas);
    };

    const animationId = window.requestAnimationFrame(changeCanvas);

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [windowHeight, windowWidth]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor: "black",
        top: `-${radius[1]}px`,
        left: `-${radius[1]}px`,
        position: "absolute",
      }}
    />
  );
};

export default Canvas;
