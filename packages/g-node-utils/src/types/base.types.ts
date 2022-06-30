type TEntryConfig = {
    input_template: string // this can be a glob or an array of single files.
    output_directory: string
    output_filename?: string /// OUTPUT FILENAME WITH NO EXTENSION> IF UNDEFINED, it uses the templates name + prefix
    output_prefix?: string
    context? : string //base path. if not set "__dirname will be used.
   // render_template_data?: TConfigTemplateData
}
type THtmlWebpackOptions = {
    inject?: boolean
    minify?: boolean
    template: string    ///these are the single specifoc file names
    filename: string
    context? : string //base path. if not set "__dirname will be used.
}
