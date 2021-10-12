import { Component, OnInit } from '@angular/core';
import { MapGeocoder, MapDirectionsService } from '@angular/google-maps';

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
  rta: google.maps.DirectionsResult = {
    geocoded_waypoints: [],
    routes: []
  };

  constructor(
    private mapGeocoder: MapGeocoder,
    private directionsService: MapDirectionsService,

  ) { }

  ngOnInit(): void {
  }

  addPoint() {
    const value = this.input;
    this.mapGeocoder.geocode({address: value})
    .subscribe(rta => {
      if (rta.results.length > 0) {
        const place = rta.results[0];
        this.points.push({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        });
      }
      this.input = '';
    });
  }

  calc() {
    const origin = this.points[0];
    const waypoints = this.points
      .filter((_, index) => index !== 0)
      .map(item => ({
        location: new google.maps.LatLng(item.lat, item.lng),
        stopover: true
      }));
    this.directionsService.route({
      origin,
      destination: origin,
      waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
      optimizeWaypoints: true
    })
    .subscribe(rta => {
      if (rta.result) {
        this.rta = rta.result;
      }
    })
  }

}
