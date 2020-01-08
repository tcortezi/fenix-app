<template>
	<section class="section">
		<div class="container">
			<div class="columns is-variable">
				<div class="column is-half">
					<h2>
						Como <br />
						<span>funciona?</span>
					</h2>
					<p>
						Ao tornar-se membro da <strong>Fênix Club</strong> você será inserido em nosso Grupo VIP no Telegram e já poderá receber as entradas para começar a lucrar, além das orientações necessárias!
					</p>
				</div>
				<div class="column is-half">
					<h2>
						Estaremos <br />
						<span>ao seu lado!</span>
					</h2>
					<p>
						Você <strong>não precisa ser um trader profissional</strong> ou expert para começar a fazer seu dinheiro dar lucros.
						Temos uma equipe de mentores para te dar o suporte técnico e profissional necessário durante toda sua jornada.
					</p>
				</div>
			</div>
			<div class="columns is-variable">
				<div class="column is-half">
					<slider></slider>
				</div>
				<div class="column is-half">
					<h2>
						O que dizem os
						<span>membros do clube?</span>
					</h2>
					<p>
						Os resultados dos nossos membros falam por si só e compartilhamos isso com <strong>muito orgulho e realização</strong>.
					</p>
					<p class="look">
						<img src="../assets/left-arrow.svg">
						<strong>Veja você mesmo!</strong>
					</p>
					<h2>+2000 <span>membros</span></h2>
					<h2>+R$1 milhão <span>lucrados</span></h2>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  import Slider from '~/components/Slider'
  export default {
    components: {
      Slider
    }
  }
</script>

<style lang="scss" scoped>
	section > .container {
		.columns { --columnGap: 66px; }
		.columns:last-of-type {
			margin-top: 60px;
		}
		margin-top: 100px;
		h2 { color: #ffffff; }
		p {
			color: rgba(255, 255, 255, 0.8);
			font-size: 20px;
			line-height: 32px;
		}
		p.look {
			margin-top: 90px;
			margin-bottom: 90px;
			display: flex;
			align-items: center;
			> img { margin-right: 16px; }
			> strong { font-size: 24px; line-height: 24px; color: white; }
		}
	}
	@media screen and (max-width: 769px) {
		section > .container {
			overflow: hidden;
			margin-top: 30px;
			p {
				font-size: 1rem;
				line-height: 1.5rem;
			}
			p.look { display: none; }
			p:first-of-type { margin-bottom: 30px; }
			h2:last-of-type { margin-bottom: unset; }
			.columns:last-of-type {
				margin-top: unset;
				display: flex;
				flex-direction: column;
				.column:first-of-type { margin-bottom: 60px; }
				.column:last-of-type { order: -1; }

			}
		}
	}
</style>