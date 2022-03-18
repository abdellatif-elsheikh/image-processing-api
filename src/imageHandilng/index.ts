import fse from 'fs-extra';

interface Params {
	name: string;
	width?: number;
	height?: number;
	extension?: string | null;
}

const validateImage = async (params: Params) => {
	// create dir with fs-extra
	const imageIsExist = fse.existsSync(`images/main/${params.name}.jpg`);

	if (imageIsExist) {
		if (!(params.name || params.width || params.height)) {
			return {
				error: 400,
				message:
					'please write a valid data ex: api/resize-image?name=fedrik&width=200&height=200 ',
			};
		}
	} else {
		return {
			error: 400,
			message: `sorry image ${params.name} dose not exist`,
		};
	}
};
const isExist = fse.existsSync('images/main/fredrik');
