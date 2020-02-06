<template>
	<section class="section">
		<div class="container">
			<div class="columns is-multiline">
				<div class="column is-half">
					<h2>O que <span>fazemos?</span></h2>
					<p>
						Ao fazer parte do <strong>Fênix Club</strong>, você receberá a indicação de nossos profissionais com a seleção das <strong>melhores opções</strong> de entrada no mercado esportivo. <br /><br />

						Nosso trabalho é entregar uma análise de qualidade, para você <strong>bastará um clique</strong>.
					</p>
				</div>
				<div class="column is-half is-paddingless img" data-aos="fade-left" data-aos-easing="ease" data-aos-anchor-placement="center-bottom">
					<img src="../assets/iphone1.png">
				</div>
				<div class="column is-half">
					<h2>Qual é a <span>frequência?</span></h2>
					<p>
						Nossos consultores trabalham de <strong>domingo a domingo</strong>.
						Isto significa que você receberá análises diárias.
					</p>
				</div>
				<div class="column is-half">
					<h2>Funciona <span>mesmo?</span></h2>
					<p>
						Nos orgulhamos em dizer que até hoje não entregamos um mês com menos de <strong>100% de lucro</strong> sobre o capital, com meses de pico <strong>ultrapassando os 300% de lucro</strong>.
					</p>
				</div>
			</div>
			<div class="cta">
				<p v-if="$store.state.plan == 'normal'">R$ 99,90 mensais</p>
				<p v-else>3 dias grátis. R$ 99,90/mês</p>
				<a :href="checkout" class="btn">
					QUERO COMEÇAR A LUCRAR
				</a>
				<img src="../assets/cards.png">
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['checkout']
	}
</script>

<style lang="scss" scoped>
	section > .container {
		margin-top: 148px;
		background: #ffffff;
		box-shadow: 0px 12px 20px rgba(5, 7, 11, 0.6);
		border-radius: 10px;
		padding: 42px 32px;
		padding-bottom: 0;
		p {
			font-weight: normal;
			font-size: 20px;
			line-height: 32px;
		}
		.column.img {
			display: flex;
			justify-content: center;
			margin-top: -60px;
		}
		.cta {
			transform: translateY(83px);
		}
	}
	@media screen and (max-width: 769px) {
		section > .container {
			padding: 20px;
			margin-top: 90px;
			padding-top: 300px;
			.columns {
				display: flex;
				flex-direction: column;
			}
			.column.img {
				order: -1;
				> img {
					position: absolute;
					top: -40px;
					max-width: 90vw;
				}
			}
			p {
				font-size: 1rem;
				line-height: 1.5rem;
			}
			.cta {
				transform: translateY(0);
				position: relative;
				width: calc(100vw - 4px);
				margin-left: -40px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
	}
</style>