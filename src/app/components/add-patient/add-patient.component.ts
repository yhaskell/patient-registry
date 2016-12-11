import { Component } from '@angular/core';


@Component({ selector: "add-patient", templateUrl: './add-patient.component.html', styleUrls: ['./add-patient.component.css'] })
export class AddPatientComponent {
  realname: string = "";
  birthday: Date = new Date(0);
  weight: number = 60;
  height: number = 160;
  activityLevel: number = 2;

  KOK: number = 0;
  GZT: number = 0;

  imtDescription(imt: number) {
    if (imt <= 16) return "Выраженный дефицит массы тела";
    else if (imt < 18.5) return "Недостаточная (дефицит) масса тела";
    else if (imt < 25) return "Норма";
    else if (imt < 30) return "Избыточная масса тела (предожирение)";
    else if (imt < 35) return "Ожирение первой степени";
    else if (imt < 40) return "Ожирение второй степени";
    else return "Ожирение третьей степени (морбидное)";
  }

  get imt() {
    var mh = this.height / 100;
    var imtN = this.weight / (mh * mh);

    imtN = Math.floor(10 * imtN) / 10;

    return `ИМТ: ${imtN} (${this.imtDescription(imtN)})`;
  }
}
