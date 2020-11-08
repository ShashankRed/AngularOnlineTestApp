import { Component, OnInit, ViewChild } from '@angular/core';
import { RSA_X931_PADDING } from 'constants';
import { element } from 'protractor';
import { Question, OnlinetestService } from '../onlinetest.service';
import $ from "jquery";

function hello(name) {

  const ele1 = document.getElementById("rdbutton1") as HTMLInputElement;
  ele1.checked = false;
  const ele2 = document.getElementById("rdbutton2") as HTMLInputElement;
  ele2.checked = false;
  const ele3 = document.getElementById("rdbutton3") as HTMLInputElement;
  ele3.checked = false;
  const ele4 = document.getElementById("rdbutton4") as HTMLInputElement;
  ele4.checked = false;
}

@Component({
  selector: 'app-onlinetest',
  templateUrl: './onlinetest.component.html',
  styleUrls: ['./onlinetest.component.css']
})
export class OnlinetestComponent implements OnInit {
  loop_value: number = 0;
  correct: number = 0;
  result_message: string;
  OnlineObject: Question[];
  showModalBox: boolean = false;

  fname: string;
  qes: string;
  opt1: string;
  opt2: string;
  opt3: string;
  opt4: string;
  answer: string;

  constructor(private onlinservice: OnlinetestService) { }

  ngOnInit(): void {

    this.onlinservice.loadData().subscribe(data => {

      this.OnlineObject = data;

      for (let i = this.loop_value; i < data.length; i++) {
        this.qes = data[i].ques;
        this.opt1 = data[i].option1;
        this.opt2 = data[i].option2;
        this.opt3 = data[i].option3;
        this.opt4 = data[i].option4;
        this.answer = data[i].ansr;
        this.loop_value++;
        console.log("loop value is " + i);
        break;
      }
    });
  }

  fun(name): void {

    this.onlinservice.loadData().subscribe(data => {

      this.OnlineObject = data;

      for (let i = this.loop_value; i < data.length; i++) {
        this.qes = data[i].ques;
        this.opt1 = data[i].option1;
        this.opt2 = data[i].option2;
        this.opt3 = data[i].option3;
        this.opt4 = data[i].option4;
        this.answer = data[i].ansr;
        this.loop_value++;
        break;
      }
    });

    this.fname = name;

    if (this.fname == this.answer) {
      this.correct++;
    } else {
      console.log("wrong answer");
    }
    hello(name);

  }

  report(): void {

    if (0) {
      this.showModalBox = false;
    } else {

      this.showModalBox = true;


      if (this.loop_value != this.OnlineObject.length - 1) {

        if (this.correct > 3) {

          this.result_message = "You have Successfully completed the Online test with " + this.correct + " points"
        } else {

          this.result_message = "Oops you haven't scored. Please try again"
        }

      } else {

        this.result_message = " Please complete all the Questions !!"
      }

    }

  }

}

// for (var i in data) {
//   console.log(i);
//   break;
// }
//  UncheckFooBox() {
//       var elem = document.getElementsByName("");
//       var isChecked = elem.getAttribute('checked');
//       if (isChecked)
//         elem.removeAttribute('checked');
//     }