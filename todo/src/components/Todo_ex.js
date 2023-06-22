import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
// import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Todo = ({ name, id, importance }) => {
// const Todo = (props) => {
	// const { name, completed, id } = props;
  return (
	<>
	<ListGroup as='ol' numbered>
		<ListGroup.Item
			as='li'
			className='d-flex justify-content-between align-items-start'
			children
		>
			<div className='ms-2 me-auto'>
				<div className='fw-bold'>
					{name}
				</div>
				Task Notes {id}
			</div>
			<Badge bg='primary' pill>
				{importance}
			</Badge>

		</ListGroup.Item>
	</ListGroup>

	</>
  )
}

export default Todo;

// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

function CheckboxesExample() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
    </>
  );
};

export { CheckboxesExample };