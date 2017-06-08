import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent {


  //==스크롤이 변경되었을 때============================================================================================
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    this.scroll_position = document.body.scrollTop;

    const e = document.body;

    console.log("scrollTop: " + e.scrollTop);
    console.log("offsetHeight: " + e.offsetHeight);
    console.log("scrollHeight: " + e.scrollHeight);
    if (e.scrollTop + e.offsetHeight >= e.scrollHeight) {
      console.log('infinite scroll');

      //추가적으로 출력할 개수 10개이상인지 아닌지 확인후 출력
    }
  }
  //====================================================================================================================


  scroll_position: number; //현재 스크롤 위치
  cardItem: CardItem; //하나의 카드
  owner: Owner; //하나의 카드를 적은 사용자
  cardItemArray: CardItem[] = []; //카드들의 집합

  aaaa:string;

  constructor() {
    this.setCard();
    this.aaaa="테스트";
  }



  //json값을 객체화한다
  setCard(){

    //예시

    this.owner ={
      name: "선필",
      email: "sunpil13@korea.ac.kr"
    }

    this.cardItem = {
      id: 1,
      timestamp: "aa",
      imgSrc: "http://naver.com/aaa.jpg",
      context: "이곳은 본문의 내용이 나오는 곳",
      hashTags: ["#해쉬태그1", "#해쉬태그2"],
      owner: this.owner
    }


    this.cardItemArray.push(this.cardItem);
    this.cardItemArray.push(this.cardItem);
    this.cardItemArray.push(this.cardItem);
  }


  //카드를 추가
  addCard(){

  }
}


//한 카드의 정보
interface CardItem{
  id: number; //카드번호(primary key)
  timestamp: string; //날짜
  imgSrc: string; //이미지경로
  context: string; //내용
  hashTags: string[]; //해시태그
  owner: Owner;
}


//카드를 적은 유저의 정보(CardItem에 속함)
interface Owner{
  email: string;
  name: string;
}
