import { Component, OnInit } from '@angular/core';
import { HotelesTsService } from "../../services/hoteles.ts.service";
import { HotelesI, Hoteles } from '../../interfaces/hoteles';
import { ErrorService } from 'src/app/services/error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  hoteles!: HotelesI[]

  ngOnInit(): void {
    this.getHoteles()
    
  }

  constructor(
    private _hotelesService: HotelesTsService,
    private _errorService: ErrorService,
  ){}

  getHoteles() {
    this._hotelesService.getHoteles().subscribe(
      (data) => {
        this.hoteles = data;
        console.log(this.hoteles);
      },
      (error: HttpErrorResponse) => {
        this._errorService.msjError(error);
      }
    );
  }

}
