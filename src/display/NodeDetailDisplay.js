import CustomChart from "../components/CustomChart";
import { useParams } from "react-router-dom";
import sty from "./css/NodeDetailDisplay.module.css"

function NodeDetail() {
    const { name } = useParams();
    // const { cpu } = useParams();
    // const { ram } = useParams();
    // const { ip } = useParams();
    // console.log(name)

    let cpuData = {
        labels: ["CPU", "Max CPU"],
        datasets: [
            {
                type: 'bar',
                label: 'CPU Usage',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [2, 4],
                borderColor: 'red',
                borderWidth: 1,
            },
        ],
    };

    const cpuOptions = {
        interaction: {
            mode: 'index',  	//툴팁 전체 출력
            intersect: false,
        },
        maxBarThickness: 100,    // bar 타입 막대의 최대 굵기
        layout: {
            // padding: {
            //     top: 30
            // }
        },
        plugins: {
            legend: {
                position: 'right',		//레전드 위치 
            },
            title: {
                display: true,		//타이틀 
                text: "CPU",
                fontSize: 25,
            },
            datalabels: {
                anchor: 'start',  //start , end 
                align: 'middle',   //top bottom middle 데이터 라벨 표시 위치
                formatter: function (value, context) {
                    //데이터 값이 0 이면 출력 안함
                    if (context.dataset.label !== '전체') {
                        if (value == 0) {
                            return null;
                        } else {
                            return value;
                        }
                    } else {
                        if (value == 0) {
                            return null;
                        } else {
                            let result = value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                            return result;
                        }
                    }
                },
            },
            tooltip: {
                backgroundColor: 'rgba(124, 35, 35, 0.4)',
                padding: 10,
                bodySpacing: 5,     //툴팁 내부의 항목 간격
            }
        },
        maintainAspectRatio: true, //false :  상위 div에 구속
        responsive: true, //false : 정적 true: 동적
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                // beginAtZero: true
            },
        },
        onClick: function (evt, element) {
            // onClickNot working element null
            console.log(evt, element);	//클릭시 이벤트 추가 가능
        }
    };

    let ramData = {
        labels: ["RAM Usage", "Empty"],
        datasets: [
            {
                type: 'pie',
                label: 'RAM Usage',
                backgroundColor: ['blue', 'white'],
                data: [35, 100 - 35],
                borderColor: 'black',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className={sty.container}>
            <div className={sty.name}>{name}</div>
            <div className={sty.charts}>
                <div className={sty.chart}><CustomChart data={cpuData} options={cpuOptions} /></div>
                <div className={sty.chart}><CustomChart data={ramData} /></div>
            </div>
            <div className={sty.detail}>
                <div className={sty.text}>CPU Usage: <span className={sty.value}>2</span></div> {/* 추후 rest api에서 이름 검색으로 GET 할 예정*/}
                <div className={sty.text}>RAM Usage: <span className={sty.value}>35%</span></div>
                <div className={sty.text}>IP: <span className={sty.value}>172.25.235.99</span></div>
            </div>
        </div>
    );
}

export default NodeDetail;