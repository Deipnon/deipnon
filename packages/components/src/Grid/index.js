// @flow
import React from 'react'
import styled from '@emotion/styled'
import { ClassNames } from '@emotion/core'

const ContainerElement = styled('div')``
const RowElement = styled('div')``
const ColumnElement = styled('div')``

type GridPropsType = {|
	children: React$Node,
	fluid: Boolean
|}

type RowPropsType = {|
	children: React$Node
|}

type ColPropsType = {|
	children: React$Node,
	lg?: Number,
	md?: Number,
	sm?: Number,
	xs?: Number

|}

class Grid extends React.PureComponent<GridPropsType> {
	static Row = (props: RowPropsType) => {
		return (<RowElement className="row">
			{props.children}
		</RowElement>)
	}

	static Col = (props: ColPropsType) => {
		const { xs, lg, md, sm, children } = props

		const className = {
			// $FlowFixMe
			[`col-xs-${xs}`]: !!xs,
			// $FlowFixMe
			[`col-sm-${sm}`]: !!sm,
			// $FlowFixMe
			[`col-md-${md}`]: !!md,
			// $FlowFixMe
			[`col-lg-${lg}`]: !!lg
		}

		return (<ClassNames>
			{ ({ css, cx }) => <ColumnElement className={cx(className)}>
				{children}
			</ColumnElement>}
		</ClassNames>)
	}

	container ({ fluid, children }: GridPropsType) {
		const className = {
			container: !fluid,
			'container-fluid': fluid
		}
		return (<ClassNames>
			{({ css, cx }) => {
				return (<ContainerElement className={cx(className)}>
					{children}
				</ContainerElement>)
			}}
		</ClassNames>)
	}

	render () {
		const Container = this.container

		return (<Container {...this.props}>
			{ this.props.children }
		</Container>)
	}
}

export default Grid
