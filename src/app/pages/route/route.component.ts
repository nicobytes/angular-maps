import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  input: string = '';
  points: google.maps.LatLngLiteral[] = [
    { lat: -17.3938831, lng: -66.2339165 },

  ];
  center: google.maps.LatLngLiteral = { lat: -17.3938831, lng: -66.2339165 };

  constructor() { }

  ngOnInit(): void {
  }

  addPoint() {
    const value = this.input.split(',');
    this.points.push({
      lat: parseFloat(value[0]),
      lng: parseFloat(value[1])
    });
    this.input = '';
  }

}
