export default({ id, firstName, lastName })  => (
	<li key={id}>
		<div>{firstName}</div>
		<div>{lastName}</div>
	</li>
);