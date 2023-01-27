import { ResponsiveLine } from '@nivo/line'

function LineChart() {
    return (
        <div>
            <ResponsiveLine
                data={[
                    {
                        "id": "japan",
                        "color": "hsl(14, 70%, 50%)",
                        "data": [
                            {
                                "x": "plane",
                                "y": 104
                            },
                            {
                                "x": "helicopter",
                                "y": 180
                            },
                            {
                                "x": "boat",
                                "y": 128
                            },
                            {
                                "x": "train",
                                "y": 130
                            },
                            {
                                "x": "subway",
                                "y": 86
                            },
                            {
                                "x": "bus",
                                "y": 29
                            },
                            {
                                "x": "car",
                                "y": 92
                            },
                            {
                                "x": "moto",
                                "y": 77
                            },
                            {
                                "x": "bicycle",
                                "y": 248
                            },
                            {
                                "x": "horse",
                                "y": 186
                            },
                            {
                                "x": "skateboard",
                                "y": 34
                            },
                            {
                                "x": "others",
                                "y": 8
                            }
                        ]
                    },
                    {
                        "id": "france",
                        "color": "hsl(128, 70%, 50%)",
                        "data": [
                            {
                                "x": "plane",
                                "y": 89
                            },
                            {
                                "x": "helicopter",
                                "y": 190
                            },
                            {
                                "x": "boat",
                                "y": 139
                            },
                            {
                                "x": "train",
                                "y": 275
                            },
                            {
                                "x": "subway",
                                "y": 32
                            },
                            {
                                "x": "bus",
                                "y": 260
                            },
                            {
                                "x": "car",
                                "y": 294
                            },
                            {
                                "x": "moto",
                                "y": 178
                            },
                            {
                                "x": "bicycle",
                                "y": 253
                            },
                            {
                                "x": "horse",
                                "y": 189
                            },
                            {
                                "x": "skateboard",
                                "y": 206
                            },
                            {
                                "x": "others",
                                "y": 130
                            }
                        ]
                    },
                    {
                        "id": "us",
                        "color": "hsl(250, 70%, 50%)",
                        "data": [
                            {
                                "x": "plane",
                                "y": 192
                            },
                            {
                                "x": "helicopter",
                                "y": 228
                            },
                            {
                                "x": "boat",
                                "y": 38
                            },
                            {
                                "x": "train",
                                "y": 93
                            },
                            {
                                "x": "subway",
                                "y": 136
                            },
                            {
                                "x": "bus",
                                "y": 53
                            },
                            {
                                "x": "car",
                                "y": 95
                            },
                            {
                                "x": "moto",
                                "y": 148
                            },
                            {
                                "x": "bicycle",
                                "y": 102
                            },
                            {
                                "x": "horse",
                                "y": 242
                            },
                            {
                                "x": "skateboard",
                                "y": 19
                            },
                            {
                                "x": "others",
                                "y": 212
                            }
                        ]
                    },
                    {
                        "id": "germany",
                        "color": "hsl(239, 70%, 50%)",
                        "data": [
                            {
                                "x": "plane",
                                "y": 173
                            },
                            {
                                "x": "helicopter",
                                "y": 137
                            },
                            {
                                "x": "boat",
                                "y": 269
                            },
                            {
                                "x": "train",
                                "y": 101
                            },
                            {
                                "x": "subway",
                                "y": 179
                            },
                            {
                                "x": "bus",
                                "y": 7
                            },
                            {
                                "x": "car",
                                "y": 0
                            },
                            {
                                "x": "moto",
                                "y": 29
                            },
                            {
                                "x": "bicycle",
                                "y": 293
                            },
                            {
                                "x": "horse",
                                "y": 5
                            },
                            {
                                "x": "skateboard",
                                "y": 32
                            },
                            {
                                "x": "others",
                                "y": 63
                            }
                        ]
                    },
                    {
                        "id": "norway",
                        "color": "hsl(23, 70%, 50%)",
                        "data": [
                            {
                                "x": "plane",
                                "y": 216
                            },
                            {
                                "x": "helicopter",
                                "y": 113
                            },
                            {
                                "x": "boat",
                                "y": 190
                            },
                            {
                                "x": "train",
                                "y": 139
                            },
                            {
                                "x": "subway",
                                "y": 66
                            },
                            {
                                "x": "bus",
                                "y": 166
                            },
                            {
                                "x": "car",
                                "y": 291
                            },
                            {
                                "x": "moto",
                                "y": 144
                            },
                            {
                                "x": "bicycle",
                                "y": 115
                            },
                            {
                                "x": "horse",
                                "y": 108
                            },
                            {
                                "x": "skateboard",
                                "y": 167
                            },
                            {
                                "x": "others",
                                "y": 256
                            }
                        ]
                    }
                ]}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}

export default LineChart;