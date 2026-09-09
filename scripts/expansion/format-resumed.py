"""Format only additions absent from the immutable resumed baseline."""
from pathlib import Path
import importlib.util
import json
import sys
sys.dont_write_bytecode = True
root=Path(__file__).resolve().parents[2]
baseline=json.loads((root/'.raiden/state/SNAPSHOTS/gallery-expansion-resumed/baseline.json').read_text(encoding='utf-8'))
protected={(root/'concepts/gallery'/e['concept']['module']).resolve() for e in baseline['entries']}
spec=importlib.util.spec_from_file_location('expansion_format',Path(__file__).with_name('format-components.py'))
formatter=importlib.util.module_from_spec(spec)
spec.loader.exec_module(formatter)
count=0
for file in (root/'concepts/gallery/concepts').rglob('*-concept.js'):
    if file.resolve() not in protected:
        formatter.format_component(file)
        count+=1
print(f'Formatted {count} resumed additions; baseline sources untouched.')
