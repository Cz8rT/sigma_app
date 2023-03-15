import { ResponsiveBar } from '@nivo/bar'
import { useTheme } from '@mui/material';
import { tokens } from "./../theme";

export const mockBarData = [
    {
        grupa: "Grupa 1",
        'Mężczyźni': 0,
        'Kobiety': 0,
    },
    {
        grupa: "Grupa 2",
        'Mężczyźni': 0,
        'Kobiety': 0,
    },{
        grupa: "Grupa 3",
        'Mężczyźni': 0,
        'Kobiety': 0,
    },{
        grupa: "Grupa 4",
        'Mężczyźni': 0,
        'Kobiety': 0,
    },{
        grupa: "Grupa 5",
        'Mężczyźni': 0,
        'Kobiety': 0,
    },{
        grupa: "Grupa 6",
        'Mężczyźni': 0,
        'Kobiety': 0,
    },
  ];

const BarChart = ({ students }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    // Obliczanie liczby studentów każdej z grup
    const studentSexCounter = () => {
        const studentsSex = [
            {women: 0, men: 0}, 
            {women: 0, men: 0}, 
            {women: 0, men: 0}, 
            {women: 0, men: 0}, 
            {women: 0, men: 0}, 
            {women: 0, men: 0}
        ];

        students.map((e) => {
            if(e.sex === "female"){
                return studentsSex[e.group - 1].women++; 
            } else return studentsSex[e.group - 1].men++; 
        })
        return studentsSex;
    }

    const studentSexArray = studentSexCounter();

    for(var i = 0; i <= 5; i++){
        mockBarData[i]['Kobiety'] = studentSexArray[i].women;
        mockBarData[i]['Mężczyźni'] = studentSexArray[i].men;
    }

    return (
    <ResponsiveBar
        data={mockBarData}
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
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            },
            tooltip: {
                color: colors.primary[300]
            }
        }}
        keys={[
            'Mężczyźni',
            'Kobiety'
        ]}
        indexBy="grupa"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.15}
        innerPadding={5}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'dark2' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#800080',
                size: 5,
                padding: 20,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 2,
                spacing: 50
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Kobiety'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Mężczyźni'
                },
                id: 'lines'
            }
        ]}
        borderRadius={10}
        borderWidth={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.1'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Grupa',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Liczba użytkowników danej płci',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableGridY={false}
        labelSkipWidth={8}
        labelSkipHeight={13}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2'
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: 70,
                translateY: -46,
                itemsSpacing: 3,
                itemWidth: 101,
                itemHeight: 21,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 19,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in grupa: "+e.indexValue}}
    />
);
}

export default BarChart;