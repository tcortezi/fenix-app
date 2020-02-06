<template>
	<section class="section">
		<div class="container">
			<div class="columns">
				<template v-if="$store.state.plan == 'normal'">
					<div class="column is-narrow">
						<img src="../assets/guarantee.png">
					</div>
					<div class="column">
						<h2>Satisfação <span>garantida!</span></h2>
						<p>
							Torne-se membro da <strong>Fênix Club</strong> hoje mesmo! Garantimos seu lucro, caso contrário, devolvemos seu dinheiro em até 7 dias após o pagamento.
						</p>
					</div>
				</template>
				<template v-else>
					<div class="column is-narrow">
						<img width="250" src="../assets/guarantee1.png">
					</div>
					<div class="column">
						<h2>Satisfação <span>garantida!</span></h2>
						<p>
							Sabemos que a melhor forma de conhecer o nosso trabalho é colocando a mão na massa, e pensando nisso, estamos te dando <strong>3 dias grátis</strong>. Dessa forma, você começa a <strong>lucrar gratuitamente agora</strong> e poderá cancelar a assinatura quando quiser.
						</p>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	section > .container {
		margin-top: 106px;
		h2 { color: white; }
		p {
			color: rgba(255, 255, 255, 0.8);
			font-size: 20px;
			line-height: 32px;
		}
		.columns {
			display: flex;
			align-items: center;
		}
	}
	@media screen and (max-width: 769px) {
		section > .container {
			overflow: hidden;
			margin-top: 30px;
			.columns { display: block; }
			.column.is-narrow {
				text-align: center;
				> img { width: 50%; height: auto; }
			}
			p { font-size: 1rem; line-height: 1.5rem; }
		}
	}
</style>