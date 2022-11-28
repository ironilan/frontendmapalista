import { LatLng } from './../../../node_modules/@types/leaflet/index.d';


import { Component } from '@angular/core';
import {Map, tileLayer, marker, polygon} from 'leaflet';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent {
  title = 'angular-leaftlet';

  ngAfterViewInit(): void {
    const map = new Map('map').setView([-12.0626,-77.0804], 15);

    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markerItem = marker([51.5, -0.09]).addTo(map).bindPopup('Londres');

    map.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ]);


    map.on("click", (e) => {
      console.log('se hiso click', e);
    });


    polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(map);


    //cuando hacemos click
    
    


  }
}
