import { Component, Inject, inject, OnInit } from '@angular/core';
import { Form, FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  freshneesList = ["Brand New", "Second Hand", "Refurbished"];
  nameForm !: FormGroup;
  actionBtn : string = "Salvar";
  constructor (private FormBuilder : FormBuilder, private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>) {}

  ngOnInit (): void{
    this.nameForm = this.FormBuilder.group({
      name : ['',Validators.required],
      telefone :['',Validators.required]
    });

   if(this.editData){
    this.actionBtn = "Alterar";
    this.nameForm.controls['name'].setValue(this.editData.name);
    this.nameForm.controls['telefone'].setValue(this.editData.telefone);
   }

  }
addName(){
 if(this.editData){
  if(this.nameForm.valid){
    this.api.postNome(this.nameForm.value)
    .subscribe({
      next:(res)=>{
        alert("Cadastrado com Sucesso")
        this.nameForm.reset();
        this.dialogRef.close('save');
      },
      error:()=>{
        alert("Erro ao adicionar Nome")
      }
    })
   }
 }else{
  this.updateNome()
 }
}
updateNome(){
  this.api.putNome(this.nameForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Nome Alterado com Sucesso!");
      this.nameForm.reset();
      this.dialogRef.close('Alterar');
    },
    error:()=>{
      alert("Erro na alteração!")
    }
  })
}
}
