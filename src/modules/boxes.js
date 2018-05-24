export default class Box {
	constructor(options, props) {
		this.props = props;
		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		this.color = options.color;
		this.id = options.id;
		this.currentPosition = -20;
		this.margin = options.margin;
		this.speed = options.speed;
		this.width = 20;
		this.height = 20;
		this.animate();
	}
	detect(x, y) {
		if (x >= this.margin &&
		x < this.margin + this.width &&
		y >= this.currentPosition &&
		y < this.currentPosition + this.height) {
			return this;
		}
	}
	animate() {
		this.context.fillStyle = this.color;
		this.context.fillRect(this.margin, this.currentPosition, this.width, this.height);
		if (this.currentPosition >= this.canvas.clientHeight) {
			this.props.removeBox(this.id);
		}
		this.currentPosition += this.speed;
	}
};