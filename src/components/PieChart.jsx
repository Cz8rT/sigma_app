import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material';
import { tokens } from "./../theme";

const mockPieData = [
    {
      id: "Grupa 1",
      label: "Grupa 1",
      value: 0,
      color: "hsl(104, 70%, 50%)",
    },
    {
      id: "Grupa 2",
      label: "Grupa 2",
      value: 0,
      color: "hsl(162, 70%, 50%)",
    },
    {
      id: "Grupa 3",
      label: "Grupa 3",
      value: 0,
      color: "hsl(291, 70%, 50%)",
    },
    {
      id: "Grupa 4",
      label: "Grupa 4",
      value: 0,
      color: "hsl(229, 70%, 50%)",
    },
    {
      id: "Grupa 5",
      label: "Grupa 5",
      value: 0,
      color: "hsl(344, 70%, 50%)",
    },
    {
        id: "Grupa 6",
        label: "Grupa 6",
        value: 0,
        color: "hsl(130, 70%, 50%)",
      },
  ];

const PieChart = ({ students }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Obliczanie liczby studentów każdej z grup
    const studentCounter = () => {
        const numOfStudents = [0, 0, 0, 0, 0, 0];
        students.map((e) => {
           return numOfStudents[e.group - 1]++;
        })
        return numOfStudents;
    }

    const capacityArray = studentCounter();

    for(var i = 0; i <= 5; i++){
        mockPieData[i].value = capacityArray[i];
    }

    return (
        <ResponsivePie
        data={mockPieData}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.grey[100]
                    }
                },
            },
            labels: {
                size: "20px"
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            },
            tooltip: {
                color: colors.primary[300]
            }
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pink_yellowGreen' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.greenAccent[300]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: colors.redAccent[400]
                        }
                    }
                ]
            }
        ]}
    />
);
}

export default PieChart;