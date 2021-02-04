import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public temp: number;
  public allowLocation: boolean;

  constructor(private forecastService: ForecastService) {
    forecastService.getWeather()
      .subscribe((res) => {
        this.temp = Math.floor(res.main.temp);
        console.log(res.main.temp);
      });
   }

  ngOnInit(): void {
  }

}
