import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  public Information : string ="Marvellous Infosystems";

  public fun()
  {
    if(this.Information === "Marvellous Infosystems") 
    {
      this.Information="Educating for Better tomorrow";
    }
    else
    {
      this.Information="Marvellous Infosystems"
    }
  }



  public Text : string = "Marvellous Infosystems";

  Uppercase()
  {
    this.Text = "MARVELLOUS INFOSYSTEMS";
  }

  Lowercase()
  {
    this.Text = "marvellous infosystems";
  }


}
