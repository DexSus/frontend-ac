import React from 'react';
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import HighchartsReact from 'highcharts-react-official';

HighchartsMap(Highcharts);

export const Map = () => {
    (async () => {
        const topology = await fetch(
            'https://code.highcharts.com/mapdata/countries/ua/ua-all.topo.json'
        ).then(response => response.json());

        const data = [
            ['ua-my', 10], ['ua-ks', 11], ['ua-kc', 12], ['ua-zt', 13],
            ['ua-sm', 14], ['ua-dt', 15], ['ua-dp', 16], ['ua-kk', 17],
            ['ua-lh', 18], ['ua-pl', 19], ['ua-zp', 20], ['ua-sc', 21],
            ['ua-kr', 22], ['ua-ch', 23], ['ua-rv', 24], ['ua-cv', 25],
            ['ua-if', 26], ['ua-km', 27], ['ua-lv', 28], ['ua-tp', 29],
            ['ua-zk', 30], ['ua-vo', 31], ['ua-ck', 32], ['ua-kh', 33],
            ['ua-kv', 34], ['ua-mk', 35], ['ua-vi', 36]
        ];

        Highcharts.mapChart('map', {
            chart: {
                map: topology,
                backgroundColor: '#f5efe3',
            },
            title: {
                text: 'Кількість надісланих скарг по областям',
                style: { color: '#8a6e51', fontSize: '2rem', fontFamily: 'UAF Sans' }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom',
                    theme: {
                        fill: '#d8c6a3',
                        style: { color: '#5f4b33', fontFamily: 'UAF Sans' }
                    }
                }
            },
            colorAxis: {
                min: 0,
                minColor: '#f2d9b5',
                maxColor: '#8b5e3c'
            },
            tooltip: {
                backgroundColor: '#fff',
                borderColor: '#6b4e3d',
                borderWidth: 2,
                style: {
                    color: '#6b4e3d',
                    fontSize: '16px', 
                    fontWeight: 'bold',
                    fontFamily: 'UAF Sans'
                }
            },
            series: [{
                data: data,
                name: 'Data Points',
                states: {
                    hover: {
                        color: '#deb887',
                        label: {
                            style: { fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'UAF Sans'}
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    style: { color: '#6b4e3d', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'UAF Sans' }  
                }
            }]
        });
    })();

    return (
        <div className="map-container">
            <div id="map" ></div>
        </div>
    );
};
