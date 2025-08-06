import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    delta: number;
}

export default function StarryBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const stars: Star[] = Array.from({ length: 200 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            alpha: Math.random(),
            delta: Math.random() * 0.02,
        }));

        const animate = () => {
            ctx.fillStyle = "#053370";
            ctx.fillRect(0, 0, width, height);

            for (const star of stars) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
                ctx.fill();

                // мерцание
                star.alpha += star.delta;
                if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            for (const star of stars) {
                star.x = Math.random() * width;
                star.y = Math.random() * height;
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                display: "block",
            }}
        />
    );
}
