import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './app.paragraph.html',
  //styleUrls: ['./app.component.css']
})
export class AppParagraph {
  toggle(){
      let x = document.getElementById('toggle_paragraph');
      if(x.style.display === 'none'){
        x.style.display='block';   
      }else{
          x.style.display='none';
      }
  }
}
