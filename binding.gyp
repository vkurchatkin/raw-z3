{
  "targets": [
    {
      "target_name": "binding",
      "sources": [
        "binding.cc",
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
        "z3"
      ],
      'libraries': [
        '<(module_root_dir)/libz3.dylib',
      ],
    }
  ]
}
