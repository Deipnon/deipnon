// @flow

import * as React from 'react'

type PropsType = {|
	checked: ?boolean,
	name: string,
	onChange: (e: SyntheticEvent<HTMLInputElement>) => void,
	type: string,
	value: ?string
|}

const Checkbox = (props: PropsType) => <input type="checkbox" {...props} />


export default Checkbox
