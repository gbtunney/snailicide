export type TEntryConfig<T> = {
    // input_template: string // this can be a glob or an array of single files.
    output_directory: string
    output_filename: string /// OUTPUT FILENAME WITH NO EXTENSION> IF UNDEFINED, it uses the templates name + prefix
    output_prefix?: string

    render_template_data?: T
}
export type TEntryConfigFileBatch = TEntryConfig<string>

const defineFileBatch =<T>(config : TEntryConfig<T>,
                           options: object) :  TEntryConfig<T> =>{
    console.log("THHEEE OBJWCT IS!!!!",options)
    return config
}
