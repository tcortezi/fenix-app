<template>
	<section class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-6">
					<h2>
						Aposente as <br />
						<span>chuteiras!</span>
					</h2>
					<p>
						Nossa missão é <strong>gerar uma renda extra mensal</strong> para nossos membros.
						<br /><br />
						Deixe com a gente o trabalho chato e <strong>aproveite</strong> nossas altas <strong>taxas de sucesso</strong> no final do mês!
					</p>
				</div>
				<div class="column shoes" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="center-bottom">
					<img id="shoes" src="../assets/shoes.png">
				</div>
			</div>
			<div class="cta" data-aos="fade-down" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
				<p>R$ 99,90 mensais</p>
				<a :href="checkout" class="btn">
					QUERO ENTRAR PRO CLUBE
				</a>
				<img src="../assets/cards.png" width="240px">
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
    max-height: 378px;
		margin-top: 106px;
		background: linear-gradient(231.66deg, #42D9C8 0%, rgba(44, 140, 153, 0.85) 100%);
		box-shadow: 0px 12px 20px rgba(5, 7, 11, 0.6);
		border-radius: 10px;
		padding: 42px;
		padding-bottom: 0;
		h2 { color: white; }
		p {
			font-size: 20px;
			line-height: 32px;
			color: #212A47;
		}
		#shoes {
			max-width: 560px;
		  animation: shoes 3.6s ease-in-out infinite;
		  transform-origin: 50% 50%;
		}
		@keyframes shoes {
		  0% { transform: translateY(-125px) }
		  50% { transform: translateY(-140px) }
		  100% { transform: translateY(-125px) }
		}
		.cta {
			position: absolute;
			bottom: -83px;
			right: 47px;
		}
	}
	@media screen and (max-width: 769px) {
		section { overflow: hidden; padding-top: 90px; }
		section > .container {
			margin-top: unset;
			max-height: 100%;
			padding: 20px;
			padding-top: 80px;
			padding-bottom: 30px;
			p { font-size: 1rem; line-height: 1.5rem; }
			.columns {
				display: flex;
				flex-direction: column;
			}
			.shoes { order: -1; }
			#shoes {
				position: absolute;
				top: 40px;
				left: -10px;
				max-width: 100vw;
			}
			.cta {
				right: unset;
				bottom: unset;
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