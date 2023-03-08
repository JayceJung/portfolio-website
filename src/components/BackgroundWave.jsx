import React from "react";
import Wave from "react-wavify";
import styled, {keyframes} from "styled-components"

export default function BackgroundWave() {
  React.useEffect(() => {
    const link = document.querySelectorAll(".hover-this");

    const animate = function (e) {
      console.log(e.type);
      const span = this.querySelector("span");
      console.log(span);
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 50,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") {
        span.style.transform = "";
      }
    };
    link.forEach((b) => b.addEventListener("mousemove", animate));
    link.forEach((b) => b.addEventListener("mouseleave", animate));
  }, []);

  const NewWave = styled(Wave)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
  `
  const Title = styled.span`
    font-family: Raleway, Helvetica, sans-serif;
    font-size: 128px;
    font-weight: 900;
    line-height: 150px;
    letter-spacing: 0em;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    opacity: 0.7;
    animation: waviy 3s ease-in-out infinite;

    @keyframes waviy {
      0%,
      40%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-15px);
      } 
    }
  `
  
  return (
    <>
      <NewWave
        fill="rgba(255,0,0,0.4)"
        paused={false}
        options={{
          height: 300,
          amplitude: 100,
          speed: 0.15,
          points: 5,
        }}
      />
      <NewWave
        fill="rgba(255,255,0,0.4)"
        paused={false}
        options={{
          height: 310,
          amplitude: 80,
          speed: 0.2,
          points: 5,
        }}
      />
      <NewWave
        fill="rgba(0,255,255,0.4)"
        paused={false}
        options={{
          height: 320,
          amplitude: 90,
          speed: 0.13,
          points: 5,
        }}
      />
      <Title className="hover-this">
        Hello       
      </Title>
    </>
  );
}
