export class Calculator {
	output_previous;
	output_current;
	prev_item;
	current_item;
	operation;

	constructor() {
		this.output_previous = document.getElementById( 'previous-item' );
		this.output_current  = document.getElementById( 'current-item' );
		this.prev_item       = '';
		this.current_item    = '';
		this.operation       = '';

		this.clear();
		this.attachEvents();
	}

	attachEvents() {
		document.addEventListener( 'click', e => {
			if ( !e.target.closest( '.calculator__digits .btn' ) ) return;

			const button = e.target.closest( '.calculator__digits .btn' );

			if ( button.dataset.func ) {
				switch ( button.dataset.func ) {
					case 'clear':
						this.clear();
						break;
					case 'delete':
						this.delete();
						break;
					case 'equal':
						this.compute();
						break;
					default:
						this.chooseOperation( button.dataset.func );
				}
			} else if ( button.dataset.num ) {
				this.addNumber( button.dataset.num );
			}

			this.updateDisplay();
		} );
	}

	clear() {
		this.current_item = '';
		this.prev_item    = '';
		this.operation    = '';
	}

	delete() {
		this.current_item = this.current_item.slice( 0, -1 );
	}

	addNumber( number ) {
		if ( number === '.' && this.current_item.includes( '.' ) ) return;

		this.current_item += '' + number;
	}

	chooseOperation( operation ) {
		if ( this.current_item === '' ) return;

		if ( this.prev_item !== '' ) {
			this.compute();
		}

		this.operation    = operation;
		this.prev_item    = this.current_item;
		this.current_item = '';
	}

	compute() {
		if ( isNaN( this.prev_item ) || isNaN( this.current_item ) ) return;

		switch ( this.operation ) {
			case '+':
				this.current_item = +this.prev_item + +this.current_item;
				break;
			case '-':
				this.current_item = +this.prev_item - +this.current_item;
				break;
			case '*':
				this.current_item = +this.prev_item * +this.current_item;
				break;
			case '/':
				this.current_item = +this.prev_item / +this.current_item;
				break;
			default:
				return;
		}

		this.operation = '';
		this.prev_item = '';
	}

	updateDisplay() {
		this.output_current.innerText = this.current_item;

		this.output_previous.innerText = this.prev_item + ' ' + this.operation;
	}
}