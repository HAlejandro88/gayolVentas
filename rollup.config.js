import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';
import uglify from '@lopatnov/rollup-plugin-uglify';
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';


const name = `${((new Date()).getTime())}.bundled.js`;

const filesizeConfig = {
    showGzippedSize: true,
    showBrotliSize: true,
    showMinifiedSize: true,
};

const copyConfig = {
    targets: [
        { 
            src: 'index.html',
            dest:'dist', 
            transform: (content) => 
                        content.toString().replace('./src/Routing.js', `./${name}`)
        }
    ]
};

const config = {
    input: './src/Routing.js',
    output: {
        file: `dist/${name}`
    },
    inlineDynamicImports: true,
    plugins: [
            resolve(),
            copy(copyConfig), 
            uglify({
                output: {
                    comments: function(node, comment) {
                        if (comment.type === "comment2") {
                            // multiline comment
                            return /@preserve|@cc_on/i.test(comment.value);
                        }
                        return false;
                    }
                }
            }),
            filesize(filesizeConfig)
        ]
};

export default config;
