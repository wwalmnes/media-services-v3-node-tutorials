// The TransformFactory class is a wrapper around the model types in Azure Media Services to make code look a lot cleaner
// when creating custom encoding transforms.  The goal of the TransformFactory is to eliminate the need for declaring the odataType strings constantly 
// while working with the Typescript types that are generated by the Azure SDK auto generation code. 
// This helps to clean up your custom Transform code and keeps things neat.
// 
// NOTE: This is not complete list here, so feel free to add new codecs, formats, or preset types you would like to simplify in your code. 

import {
    AacAudio,
    H264Layer,
    H264Video,
    H265Video,
    H265Layer,
    Mp4Format,
    PngFormat,
    PngImage,
    PngLayer,
    JpgFormat,
    JpgLayer,
    JpgImage,
    StandardEncoderPreset,
    BuiltInStandardEncoderPreset,
    SelectAudioTrackById,
    SelectAudioTrackByAttribute,
    InputFile,
    JobInputAsset,
    JobInputHttp,
    JobOutputAsset,
    AudioAnalyzerPresetUnion,
    VideoAnalyzerPreset
} from "@azure/arm-mediaservices"

export class TransformFactory {

    static createH264Video(video: Omit<H264Video, "odataType">): H264Video {
        return {
            odataType: "#Microsoft.Media.H264Video",
            ...video,
        }
    }

    static createH264Layer(layer: Omit<H264Layer, "odataType">): H264Layer {
        return {
            odataType: "#Microsoft.Media.H264Layer",
            ...layer,
        }
    }

    static createH265Video(video: Omit<H265Video, "odataType">): H265Video {
        return {
            odataType: "#Microsoft.Media.H265Video",
            ...video,
        }
    }

    static createH265Layer(layer: Omit<H265Layer, "odataType">): H265Layer {
        return {
            odataType: "#Microsoft.Media.H265Layer",
            ...layer,
        }
    }

    static createAACaudio(audio: Omit<AacAudio, "odataType">): AacAudio {
        return {
            odataType: "#Microsoft.Media.AacAudio",
            ...audio,
        }
    }

    static createPngImage(image: Omit<PngImage, "odataType">): PngImage {
        return {
            odataType: "#Microsoft.Media.PngImage",
            ...image,
        }
    }

    static createPngLayer(image: Omit<PngLayer, "odataType">): PngLayer {
        return {
            odataType: "#Microsoft.Media.PngLayer",
            ...image,
        }
    }

    static createPngFormat(pngFormat: Omit<PngFormat, "odataType">): PngFormat {
        return {
            odataType: "#Microsoft.Media.PngFormat",
            ...pngFormat,
        }
    }

    static createJpgImage(image: Omit<JpgImage, "odataType">): JpgImage {
        return {
            odataType: "#Microsoft.Media.JpgImage",
            ...image,
        }
    }
    
    static createJpgLayer(image: Omit<JpgLayer, "odataType">): JpgLayer {
        return {
            odataType: "#Microsoft.Media.JpgLayer",
            ...image,
        }
    }
    
    static createJpgFormat(format: Omit<JpgFormat, "odataType">): JpgFormat {
        return {
            odataType: "#Microsoft.Media.JpgFormat",
            ...format,
        }
    }

    static createStandardEncoderPreset(standardEncoder: Omit<StandardEncoderPreset, "odataType">): StandardEncoderPreset {
        return {
            odataType: "#Microsoft.Media.StandardEncoderPreset",
            ...standardEncoder,
        }
    }

    static createBuiltInStandardEncoderPreset(builtInStandardEncoder: Omit<BuiltInStandardEncoderPreset, "odataType">): BuiltInStandardEncoderPreset {
        return {
            odataType: "#Microsoft.Media.BuiltInStandardEncoderPreset",
            ...builtInStandardEncoder,
        }
    }

  static createAudioAnalyzerPreset(audioAnalyserPreset: Omit<AudioAnalyzerPresetUnion, "odataType">): VideoAnalyzerPreset {
        return {
            odataType: "#Microsoft.Media.AudioAnalyzerPreset",
            ...audioAnalyserPreset,
        }
    }

    static createVideoAnalyzerPreset(videoAnalyserPreset: Omit<VideoAnalyzerPreset, "odataType">): VideoAnalyzerPreset {
        return {
            odataType: "#Microsoft.Media.VideoAnalyzerPreset",
            ...videoAnalyserPreset,
        }
    }

    static createMp4Format(mp4Format: Omit<Mp4Format, "odataType">): Mp4Format {
        return {
            odataType: "#Microsoft.Media.Mp4Format",
            ...mp4Format,
        }
    }

    static createSelectAudioTrackById(audioTrackById: Omit<SelectAudioTrackById, "odataType">): SelectAudioTrackById {
        return {
            odataType: "#Microsoft.Media.SelectAudioTrackById",
            ...audioTrackById,
        }
    }

    static createSelectAudioTrackByAttribute(audioTrackByAttribute: Omit<SelectAudioTrackByAttribute, "odataType">): SelectAudioTrackByAttribute {
        return {
            odataType: "#Microsoft.Media.SelectAudioTrackByAttribute",
            ...audioTrackByAttribute,
        }
    }

    static createInputFile(inputFile: Omit<InputFile, "odataType">): InputFile {
        return {
            odataType: "#Microsoft.Media.InputFile",
            ...inputFile,
        }
    }
    
    static createJobInputAsset(inputAsset: Omit<JobInputAsset, "odataType">): JobInputAsset {
        return {
            odataType: "#Microsoft.Media.JobInputAsset",
            ...inputAsset,
        }
    }

    static createJobInputHttp(inputHttp: Omit<JobInputHttp, "odataType">): JobInputHttp {
        return {
            odataType: "#Microsoft.Media.JobInputHttp",
            ...inputHttp,
        }
    }    

    static createJobOutputAsset(outputAsset: Omit<JobOutputAsset, "odataType">): JobOutputAsset {
        return {
            odataType: "#Microsoft.Media.JobOutputAsset",
            ...outputAsset,
        }
    }
}