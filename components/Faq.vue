<template>
	<section class="section">
		<div class="container">
			<h2>Perguntas <span>frequentes</span></h2>
      <div class="item" @click="select(1)" :class="{active:selected == 1}">
        <div class="itemTitle">
          Quais são as formas de pagamento?
        </div>
        <div class="itemDesc">
          Você pode efetuar o pagamento por <strong>cartão de crédito</strong> ou boleto.<br /><br />
          Recomendamos que você utilize um cartão de crédito, pela comodidade de não precisar efetuar o pagamento sempre que virar o mês.
        </div>
      </div>
      <div class="item" @click="select(2)" :class="{active:selected == 2}">
        <div class="itemTitle">
          Como terei acesso à mentoria?
        </div>
        <div class="itemDesc">
          Ao tornar-se membro da <strong>Fênix Club</strong> você terá acesso ao nosso Grupo VIP no Telegram. É por lá que o atenderemos e enviaremos todas as informações necessárias para suas entradas.
        </div>
      </div>
      <div class="item" @click="select(3)" :class="{active:selected == 3}">
        <div class="itemTitle">
          Quanto preciso investir?
        </div>
        <div class="itemDesc">
          Para tornar-se membro da <strong>Fênix Club</strong> você pode pagar a assinatura padrão de 100 reais mensais, ou se quiser, aproveitar nossa promoção para membros que desejam pagar bimestralmente. Desta forma você paga 175 reais a cada dois meses, o que equivale a R$ 87,50 mensais. <br /><br />
          Em relação as entradas, você pode começar com o que tem disponível, mesmo que seja pouco.<br />
          Com o tempo, o montante de suas entradas vão tomando corpo e você investe de acordo com o seu perfil de investimento.
        </div>
      </div>
			<div class="cta">
				<p>R$ 99,90 mensais</p>
				<a href="https://app.monetizze.com.br/checkout/DVU70153" class="btn">
					QUERO ENTRAR PRO CLUBE
				</a>
				<img src="../assets/cards.png" width="240px">
			</div>
		</div>
	</section>
</template>

<script>
  export default {
  	data: function () {
  		return {
  			selected: undefined
  		}
  	},
  	methods: {
  		select: function (event) {
  			if(this.selected == event) {
  				this.selected = undefined
  			} else {
  				this.selected = event
  			}
  		}
  	}
  }
</script>

<style lang="scss" scoped>
	section > .container {
		margin-top: 56px;
		background: #0E111C;
		box-shadow: 0px 12px 20px rgba(5, 7, 11, 0.6);
		border-radius: 10px;
		padding: 42px;
		display: flex;
		flex-direction: column;
		align-items: center;
		h2 { color: white; margin-bottom: 42px; }
	  .item {
	    // user-select: none;
	    width: 420px;
	    min-height: 46px;
	    border: 2px solid #ffffff;
	    border-radius: 10px;
	    overflow: hidden;
	    margin-bottom: 24px;
	    .itemTitle {
	      padding: 16px;
	      display: flex;
	      align-items: center;
	      justify-content: space-between;
	      font-weight: 600;
	      color: rgba(255, 255, 255, 0.8);
	      opacity: .75;
	      cursor: pointer;
	      margin-bottom: -1px;
	      min-height: 50px;
	      &::after {
	        content: '';
	        display: inline-block;
	        position: relative;
	        min-width: 14px;
	        height: 14px;
	        margin-right: 4px;
	        background: url(../assets/down.svg);
	        background-size: 14px 14px;
	        background-repeat: no-repeat;
	        vertical-align: middle;
	      }
	      &:hover { opacity: 1; }
	    }
	    .itemDesc {
	      font-size: 14px;
	      line-height: 20px;
	      margin-bottom: -32px;
	      padding: 16px;
	      border-top: 1px solid rgba(255, 255, 255, 0.8);
	      color: rgba(255, 255, 255, 0.8);
	      visibility: hidden;
	      opacity: 0;
	      max-height: 0px;
	      transition: max-height 400ms ease, opacity 600ms linear 0.2s, margin-bottom 300ms ease, visibility 500ms ease;
	      a { color: #70B5B6; opacity: 0.75; font-weight: 600; &:hover { opacity: 1; } }
	    }
	    &.active {
	      .itemDesc { opacity: 1; max-height: 600px; margin-bottom: unset; visibility: visible; }
	      .itemTitle { opacity: 1; margin-bottom: unset; }
	      .itemTitle:after { transform: rotate(180deg); }
	    }
	  }
	  .cta {
	  	// transform: translateY(83px);
	  	> p { color: white; }
	  	margin-top: 18px;
	  	margin-bottom: -120px;
	  }
	}
	@media screen and (max-width: 769px) {
		section > .container {
			.item {
				width: 100%;
				.itemTitle {
					padding: 8px;
				}
			}
			.cta {
				width: calc(100vw - 4px);
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-bottom: -30px;
			}
		}
	}
</style>