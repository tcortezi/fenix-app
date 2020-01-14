<template>
	<section class="section">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h2>
						Ainda tem <span>dúvidas?</span>
					</h2>
					<p>
						Não tem problema. <span><a href="https://t.me/joinchat/Le6GKFD_j50Iiq98eMdfpw" class="free-chat" target="_blank">Entre agora no nosso grupo gratuito</a></span> e tenha uma experiência <strong>sem compromissos</strong> do nosso trabalho e comece a rentabilizar seu dinheiro também!
					</p>
				</div>
				<div class="column is-narrow">
					<img src="../assets/telegram.png">
				</div>
			</div>
		</div>
		<hr />
		<div class="foot">
			<div>
				<a @click="scrollToTop">
					<img src="../assets/logo.svg" alt="Fênix Club" width="182" height="32">
				</a>
			</div>
			<div>
				<p>2019 - Todos os direitos reservados</p>
			</div>
		</div>
	</section>
</template>

<script>
  export default {
		 methods: { 
		           scrollToTop() {
		                window.scrollTo(0,0);
		           }
		        }
  }
</script>

<style lang="scss" scoped>
	.free-chat {
		color: rgba(255, 255, 255, 0.8);
		opacity: .85;
		text-decoration: underline;
		&:hover {
			opacity: 1;
		}
	}
	section > .container {
		margin-top: 149px;
		h2 { color: white; }
		p {
			font-size: 20px;
			line-height: 32px;
			color: rgba(255, 255, 255, 0.8);
		}
	}
	section {
		hr {
			border: 1px solid #161a2c;
			margin-top: 155px;
		}
		> .foot {
			opacity: 0.7;
			margin-top: 126px;
			display: flex;
			justify-content: space-around;
			p { color: #FFFFFF; }
		}
	}
	@media screen and (max-width: 769px) {
		section > .container {
			overflow: hidden;
			margin-top: 30px;
			p { font-size: 1rem; line-height: 1.5rem; }
			.columns {
				display: flex;
				flex-direction: column;
				.column.is-narrow { order: -1; text-align: center; > img { width: 100px; } }
			}
		}
		section {
			hr { margin-top: 90px; }
			> .foot { flex-direction: column; }
		}
	}
</style>