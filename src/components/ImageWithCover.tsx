import styled from 'styled-components'

interface Props { 
	image: string;
	text: string 
}

interface StyledProps {
	src: any;
}

const Image = styled.div<StyledProps>`
	margin-bottom: 30px;
	margin-top: 30px;
	background-image: url(${props => props.src});
	background-size: contain;
	background-repeat: no-repeat;
	width: 170px;
	height: 170px;
`

const Container = styled.div`
	position: relative;
	width: 100%;
`

const Overlay = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: .5s ease;
	background-color: #008CBA;
	&:hover{
		opacity: 0.9;
	}
`

const Text = styled.div`
	color: white;
	font-size: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	text-align: center;
`

export const ImageWithCover = (props: Props) => {


	return (
		<Container>
			<Image src={props.image} />
			<Overlay>
				<Text>{props.text}</Text>
			</Overlay>
		</Container>
	)
}