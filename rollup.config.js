export default { 
  input: 'src/linear-interpolation.js',
  output: [
    {
      file: 'dist/linear-interpolation.js',
      exports: 'named',
      format: 'cjs'
    },
    {
      file: 'dist/linear-interpolation.esm.js',
      format: 'esm'
    }
  ]
}
