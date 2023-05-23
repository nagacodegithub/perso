class Typed{
    constructor(typeOption) {
      this.element= typeOption.element;
      this.typeWords =$(this.element).attr('data-words') ? JSON.parse($(this.element).attr('data-words')):'';
      this.typeSpeed = typeOption.typeSpeed || 120; 
      this.backSpeed = typeOption.backSpeed || 60;
      this.typeDelay = typeOption.typeDelay || 3000;
      this.wordCount = 0;
      this.stringCount = 1;
      this.txt = "";
      this.reverse = false;
      this.delay = 300;
      if($(this.element).attr('data-words')){
         this.typeWord();
      } 
    }
  
    typeWord() {
      if (this.wordCount >= this.typeWords.length) {
        this.wordCount = 0;
      }
      if($('.type-cursor').hasClass('type-cursor-blink')){
        $('.type-cursor').removeClass('type-cursor-blink')
      }
      if (this.reverse) {
        this.txt = this.typeWords[this.wordCount].substring(0, this.stringCount--);
        this.delay = this.backSpeed;
      } else {
        this.txt = this.typeWords[this.wordCount].substring(0, this.stringCount++);
        this.delay = this.typeSpeed;
      }
      $(this.element).text(this.txt);
      if (!this.reverse && this.stringCount - 1 === this.typeWords[this.wordCount].length) {
        this.reverse = true;
        this.delay = this.typeDelay;
        $('.type-cursor').addClass('type-cursor-blink');
      } else if (this.reverse && this.txt === '') {
        this.reverse = false;
        this.wordCount++;
      }
  
      setTimeout(() => {
        this.typeWord();
      }, this.delay);
    }
}