import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-star' ,
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
    @Input()
    rating: number = 0;
    starWidth: number = 0;

    ngOnChanges(): void {
        this.starWidth = this.rating*74/5 ;
    }
}

/**
  * onChanges
  Uma vez que estamos definindo um atributo que não é estático na nossa aplicação (quantidade de estrelas de cada curso), não podemos utilizar o 'OnInit'.

  OBS: Como estamos utilizando com requisições http, nossas oprações são assíncronas. Ou seja, uma informação PODE ou NÃO ser passada para a aplicação na inicialização do módulo. (as vezes pode atrasar um pouco)
  */


  /**
  * '@'Input()
    Permite definir as propriedades da <app-star> deste componente. Em qualquer lugar que esta tag for utilizada, é possível atribuir valores de outras componentes para esta, através dessas propriedades.
    EX: vamos utilizar a variável "rating" da classe CourseListComponent para definir o número de estrelas que essa nova classe StarComponent irá gerar, a partir da propriedade "rating"(definida acima).
    ------> ver a tag <app-star> no arquivo course-list.component.html <-------
  */

