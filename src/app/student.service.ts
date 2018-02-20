import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  students=[
      
    {"id":1, "name": "Aayush", "age": 21, "city": "Ambala"},
    {"id":2, "name": "Anmol", "age": 21, "city": "Chandigarh"},
    {"id":3, "name": "Gunank", "age": 20, "city": "Himachal"}
  
];

  constructor() { }

  getStudent()
  {
    return this.students;
  }
}
