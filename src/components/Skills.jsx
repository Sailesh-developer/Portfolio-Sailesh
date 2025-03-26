import React from 'react'
import { useEffect, useRef } from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import '../stylesheets/Skills.css'
import reactjs from '../assets/reactjs.png';
import spring from '../assets/spring.png';
import angular from '../assets/angular.png';
import javaScript from '../assets/java-script.png';
import affDesigner from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Skills = () => {

    const chartRef = useRef(null);



    const navigate = useNavigate(); 

    const navigateToHome = () => {
      navigate("/")
    }

    const navigateToOfficialProjects = () => {
      navigate("/OfficialProjects")
    }

    const navigateToAboutMe = () => {
      navigate("/Aboutme")
      }

    // const [scrollSectionVisible , setScrollSectionVisible] = useState(false);

useEffect(() => {
  // Create root element
  const root = am5.Root.new(chartRef.current);

  // Apply themes
  root.setThemes([am5themes_Animated.new(root)]);

  // Sample data with normalization
  const originalData = [
    { name: "React js", steps: 25000, pictureSettings: { src: reactjs} },
    { name: "Spring boot", steps: 20000, pictureSettings: { src: spring } },
    { name: "Angular", steps: 19000, pictureSettings: { src: angular } },
    { name: "JavaScript", steps: 22465, pictureSettings: { src: javaScript } },
    { name: "Affinity designer" , steps: 30000, pictureSettings: {src: affDesigner}}
  ];

  // Normalization function
  const normalizeSteps = (value, max = 36000, min = 0, targetMax = 10, targetMin = 0) => {
    return ((value - min) / (max - min)) * (targetMax - targetMin) + targetMin;
  };

  // Normalize the data
  const data = originalData.map((item) => ({
    ...item,
    steps: normalizeSteps(item.steps),
  }));

  // Create chart
  const chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      paddingLeft: 0,
      paddingRight: 30,
      wheelX: "none",
      wheelY: "none",
    })
  );

  // Create axes
  const yRenderer = am5xy.AxisRendererY.new(root, { minorGridEnabled: true });
  yRenderer.grid.template.set("visible", false);

  const yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "name",
      renderer: yRenderer,
      paddingRight: 40,
    })
  );

  yAxis.get("renderer").labels.template.setAll({
    fill: am5.color(0xf5f900), // Change to your desired color (e.g., red in this case)
    fontSize: "16px",          // Optional: Change the font size
  });

 

  const xRenderer = am5xy.AxisRendererX.new(root, {
    minGridDistance: 80,
    minorGridEnabled: true,
  });

  const xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, { min: 0, max: 10, renderer: xRenderer })
  );

  xAxis.get("renderer").labels.template.setAll({
    fill: am5.color(0xf5f900), // Replace with your desired color (e.g., blue)
    fontSize: "14px",          // Optional: Adjust font size
  });
  // Add series
  const series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Steps",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "steps",
      categoryYField: "name",
      sequencedInterpolation: true,
      calculateAggregates: true,
      maskBullets: false,
      tooltip: am5.Tooltip.new(root, {
        dy: -30,
        pointerOrientation: "vertical",
        labelText: "{valueX}",
      }),
    })
  );

  series.columns.template.setAll({
    strokeOpacity: 0,
    cornerRadiusBR: 10,
    cornerRadiusTR: 10,
    cornerRadiusBL: 10,
    cornerRadiusTL: 10,
    maxHeight: 50,
    fillOpacity: 0.8,
  });

  // Hover handling
  let currentlyHovered;

  function handleHover(dataItem) {
    if (dataItem && currentlyHovered !== dataItem) {
      handleOut();
      currentlyHovered = dataItem;
      const bullet = dataItem.bullets[0];
      bullet.animate({
        key: "locationX",
        to: 1,
        duration: 600,
        easing: am5.ease.out(am5.ease.cubic),
      });
    }
  }

  function handleOut() {
    if (currentlyHovered) {
      const bullet = currentlyHovered.bullets[0];
      bullet.animate({
        key: "locationX",
        to: 0,
        duration: 600,
        easing: am5.ease.out(am5.ease.cubic),
      });
      currentlyHovered = null;
    }
  }

  series.columns.template.events.on("pointerover", (e) =>
    handleHover(e.target.dataItem)
  );
  series.columns.template.events.on("pointerout", () => handleOut());

  // Bullets
  const circleTemplate = am5.Template.new({});

  series.bullets.push((root, series, dataItem) => {
    const bulletContainer = am5.Container.new(root, {});
    bulletContainer.children.push(
      am5.Circle.new(root, { radius: 34 }, circleTemplate)
    );

    const maskCircle = bulletContainer.children.push(
      am5.Circle.new(root, { radius: 27 })
    );

    const imageContainer = bulletContainer.children.push(
      am5.Container.new(root, { mask: maskCircle })
    );

    imageContainer.children.push(
      am5.Picture.new(root, {
        templateField: "pictureSettings",
        centerX: am5.p50,
        centerY: am5.p50,
        width: 40,
        height: 40,
      })
    );
    return am5.Bullet.new(root, {
      locationX: 0,
      sprite: bulletContainer,
    });
  });

  // Heat rules
  series.set("heatRules", [
    {
      dataField: "valueX",
      min: am5.color(0xf5f900),
      max: am5.color(0xf5f900),
      target: series.columns.template,
      key: "fill",
    },
    {
      dataField: "valueX",
      min: am5.color(0xf5f900),
      max: am5.color(0xf5f900),
      target: circleTemplate,
      key: "fill",
    },
  ]);

  series.data.setAll(data);
  yAxis.data.setAll(data);

  const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineX.set("visible", false);
  cursor.lineY.set("visible", false);

  cursor.events.on("cursormoved", () => {
    const dataItem = series.get("tooltip").dataItem;
    if (dataItem) {
      handleHover(dataItem);
    } else {
      handleOut();
    }
  });

 
  series.appear();
  chart.appear(1000, 100);
  
  

  return () => {
    root.dispose(); // Cleanup on component unmount
  };
}, []);



  return (
   
    <div className='skills-background'>

      
        <div className='skills-heading'>Skills</div>
        <button className='home-button-for-skills' data-tooltip-id="tooltip" data-tooltip-content="Home" onClick={navigateToHome}>Home</button>
        <Tooltip place="top" id="tooltip" />
        <button className='projects-button-for-skills' data-tooltip-id="tooltip" data-tooltip-content="Official-Projects" onClick={navigateToOfficialProjects}>Projects</button>
        <button className='aboutme-button-skills' data-tooltip-id="tooltip" data-tooltip-content="About me" onClick={navigateToAboutMe}>About me</button>
        <div id="chartdiv" ref={chartRef} style={{ width: "90%", height: "730px" }} />
        
     
</div>
    
  )
}

export default Skills





