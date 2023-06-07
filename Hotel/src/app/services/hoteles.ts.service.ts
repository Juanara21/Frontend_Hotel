import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ReservaI } from '../interfaces/reservas'

@Injectable({
  providedIn: 'root'
})
export class HotelesTsService {

  private apiUrl = 'http://localhost:4000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  // Métodos para Hoteles

  getHoteles(): Observable<any> {
    const url = `${this.apiUrl}/hoteles`;
    return this.http.get(url);
  }

  getHotelById(id: string): Observable<any> {
    const url = `${this.apiUrl}/hoteles/${id}`;
    return this.http.get(url);
  }

  
  createHotel(hotel: any): Observable<any> {
    const url = `${this.apiUrl}/hoteles`;
    return this.http.post(url, hotel);
  }

  updateHotel(id: string, hotel: any): Observable<any> {
    const url = `${this.apiUrl}/hoteles/${id}`;
    return this.http.put(url, hotel);
  }

  deleteHotel(id: string): Observable<any> {
    const url = `${this.apiUrl}/hoteles/${id}`;
    return this.http.delete(url);
  }
  getReservas(): Observable<any> {
    const url = `${this.apiUrl}/reserva`;
    return this.http.get(url);
  }
  
}
