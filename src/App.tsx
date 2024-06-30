import './App.css';

function App() {
	return (
		<>
			<main className='main-container'>
				<section className='header'>
					<img className='header-img' src='./images/image-omelette.jpeg' alt='Omelette Image'/>
					<p className='header-text'> Simple Omelette Recipe </p>
					<p className='header-text-intro'>
						An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection,
						optionally filled with your choice of cheese, vegetables, or meats.
					</p>
				</section>

				<section className='preparation-container'>
					<section className='body-container-preparation'>
						<h3>Preparation time</h3>
						<ul>
							<li>
								<strong>Total:</strong> Approximately 10 minutes
							</li>
							<li>
								<strong>Preparation:</strong> 5 minutes{' '}
							</li>
							<li>
								<strong>Cooking: </strong> 5 minutes
							</li>
						</ul>
					</section>
				</section>

				<section className='ingredients-container'>
					<section className='ingredients-container-body'>
						<h2>Ingredients</h2>
						<ul>
							<li>2-3 large eggs</li>
							<li>Salt, to taste </li>
							<li>Pepper, to taste 1</li>
							<li>1 tablespoon of butter or oil</li>
							<li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
						</ul>
						<hr className='solid'></hr>
					</section>
				</section>

				<section className='instructions-container'>
					<section className='instructions-container-body'>
						<h2>Instructions</h2>
						<ol>
							<li>
								<strong>Beat the eggs: </strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well
								mixed. You can add a tablespoon of water or milk for a fluffier texture.
							</li>
							<li>
								<strong>Heat the pan: </strong>Place a non-stick frying pan over medium heat and add butter or oil.
							</li>
							<li>
								<strong>Cook the omelette: </strong>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to
								ensure the eggs evenly coat the surface.
							</li>
							<li>
								<strong>Add fillings (optional): </strong>When the eggs begin to set at the edges but are still slightly
								runny in the middle, sprinkle your chosen fillings over one half of the omelette.
							</li>
							<li>
								<strong>Fold and serve: </strong>As the omelette continues to cook, carefully lift one edge and fold it over
								the fillings. Let it cook for another minute, then slide it onto a plate.
							</li>
							<li>
								<strong>Enjoy: </strong>Serve hot, with additional salt and pepper if needed.
							</li>
						</ol>
						<hr className='solid'></hr>
					</section>
				</section>

				<section className='nutrition-container'>
					<h2>Nutrition</h2>
					<p className='nutrition-container-text'>
						The table below shows nutritional values per serving without the additional fillings
					</p>
					<section className='nutrition-container-details'>
						<table className='nutrition-container-details-table'>
							<thead> 
								<tr>
									<td>Calories</td>
									<td>277kcal</td>
								</tr>
								<tr>
									<td>Carbs</td>
									<td>0g</td> 
								</tr>
								<tr>
									<td>Protein</td>
									<td>20g</td> 
								</tr>
								<tr>
									<td>Fat</td>
									<td>22g</td> 
								</tr>
							</thead>
						</table>
					</section>
				</section>

				<div className='attribution'>
					Challenge by{' '}
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
						Frontend Mentor
					</a>
					. Coded by{' '}
					<a target='_blank' href='https://www.linkedin.com/in/minh-su-5a5852241/'>
					MinhSu (Justin)
					</a>
					.
				</div>
			</main>
		</>
	);
}
export default App;
