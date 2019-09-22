import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {}
  oportunidades = []

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.oportunidadeService.listar().subscribe(
      resposta => {
        this.oportunidades = <any> resposta;
      }
  );
  }

  adicionar(){
    this.oportunidadeService.adicionar(this.oportunidade)
      .subscribe( 
        () => {
          this.oportunidade = {};
          this.consultar(); 

          this.messageService.add({
            severity: 'success',
            summary: 'Oportunidade adicionada com sucesso'
          });
        }, 
        error => {
          let msg = 'Erro inesperado, tente novamente!';

          if(error.error.message){
            msg = error.error.message;
          }

          this.messageService.add({
            severity: 'error',
            summary: msg
          });
      });
  }

}
