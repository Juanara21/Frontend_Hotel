import { Component, OnInit } from '@angular/core';
import { HotelesTsService } from '../../services/hoteles.ts.service';
import { ReservaI } from '../../interfaces/reservas';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reserva-table',
  templateUrl: './reserva-table.component.html',
  styleUrls: ['./reserva-table.component.css']
})
export class ReservaTableComponent implements OnInit {
  reservas: ReservaI[] = [];
  displayedColumns: string[] = ['NIT_HOTEL', 'Cedula', 'NIT_A_G', 'Fecha_ingreso', 'Fecha_salida', 'Hora_ingreso', 'activo'];
  dataSource!: MatTableDataSource<ReservaI>;

  constructor(private hotelesService: HotelesTsService) { }

  ngOnInit(): void {
    this.getReservas();
  }

  getReservas(): void {
    this.hotelesService.getReservas().subscribe(
      (reservas: ReservaI[]) => {
        console.log(reservas); // Verificar la estructura de la respuesta
        this.reservas = reservas;
        this.dataSource = new MatTableDataSource(this.reservas);
      },
      
    );
  }
}
